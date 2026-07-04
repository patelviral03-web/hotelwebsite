import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, getDay, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar, Clock, Users, Home, Tent } from 'lucide-react';

const roomTypes = [
  { id: 'dome', name: 'Geodesic Dome', icon: Tent, color: '#d4af37', available: 8 },
  { id: 'private', name: 'Private Room', icon: Home, color: '#0f3460', available: 12 },
  { id: 'suite', name: 'Mountain Suite', icon: Home, color: '#16213e', available: 4 },
];

// Mock booked dates
const bookedDates = [
  { date: '2024-12-15', roomType: 'dome', count: 2 },
  { date: '2024-12-16', roomType: 'dome', count: 3 },
  { date: '2024-12-20', roomType: 'private', count: 1 },
  { date: '2024-12-22', roomType: 'dome', count: 1 },
  { date: '2024-12-25', roomType: 'suite', count: 1 },
  { date: '2024-12-28', roomType: 'dome', count: 2 },
  { date: '2025-01-01', roomType: 'private', count: 2 },
  { date: '2025-01-05', roomType: 'dome', count: 4 },
];

const AvailabilityCalendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoomType, setSelectedRoomType] = useState('dome');
  const [hoveredDate, setHoveredDate] = useState(null);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get days from previous month to show in calendar
  const firstDayOfMonth = getDay(monthStart);
  const daysFromPrevMonth = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    const date = subMonths(monthStart, 1);
    daysFromPrevMonth.push(subMonths(date, 0));
  }

  // Get days from next month to show in calendar
  const lastDayOfMonth = getDay(monthEnd);
  const daysFromNextMonth = [];
  for (let i = 0; i < 6 - lastDayOfMonth; i++) {
    const date = addMonths(monthEnd, 1);
    daysFromNextMonth.push(addMonths(date, 0));
  }

  const allDays = [...daysFromPrevMonth, ...daysInMonth, ...daysFromNextMonth];

  const handleDateClick = (date) => {
    if (!isSameMonth(date, monthStart)) {
      setCurrentDate(date);
      return;
    }
    setSelectedDate(date);
    setHoveredDate(null);
    if (onDateSelect) {
      onDateSelect(date, selectedRoomType);
    }
  };

  const getAvailabilityForDate = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const bookings = bookedDates.filter(b => b.date === dateStr && b.roomType === selectedRoomType);
    const roomType = roomTypes.find(r => r.id === selectedRoomType);
    const available = roomType.available - (bookings.reduce((sum, b) => sum + b.count, 0) || 0);
    return Math.max(0, available);
  };

  const isDateBooked = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return bookedDates.some(b => b.date === dateStr && b.roomType === selectedRoomType);
  };

  const getAvailabilityStatus = (date) => {
    const availability = getAvailabilityForDate(date);
    const roomType = roomTypes.find(r => r.id === selectedRoomType);
    
    if (!isSameMonth(date, monthStart)) return 'other-month';
    if (availability === 0) return 'fully-booked';
    if (availability <= roomType.available * 0.3) return 'limited';
    return 'available';
  };

  return (
    <motion.div
      className="bg-bg-secondary rounded-2xl p-6 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold gradient-text flex items-center space-x-2">
            <Calendar className="w-6 h-6" />
            <span>Availability Calendar</span>
          </h3>
          <p className="text-text-secondary text-sm">Real-time booking status for our accommodations</p>
        </div>
        
        {/* Room Type Selector */}
        <div className="flex space-x-2">
          {roomTypes.map((room) => (
            <motion.button
              key={room.id}
              onClick={() => setSelectedRoomType(room.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedRoomType === room.id
                  ? 'bg-gold text-primary'
                  : 'bg-primary text-text-secondary hover:bg-bg-secondary'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <room.icon className="w-5 h-5" style={{ color: selectedRoomType === room.id ? room.color : 'inherit' }} />
              <span>{room.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedRoomType === room.id ? 'bg-primary text-gold' : 'bg-gold bg-opacity-20 text-gold'
              }`}>
                {room.available - (bookedDates.filter(b => b.roomType === room.id).reduce((sum, b) => sum + b.count, 0) || 0)} left
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentDate(subMonths(currentDate, 1))}
          className="flex items-center space-x-2 px-4 py-2 bg-primary rounded-lg text-text hover:bg-bg-secondary transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>
        <h4 className="text-xl font-semibold text-gold">
          {format(currentDate, 'MMMM yyyy')}
        </h4>
        <button
          onClick={() => setCurrentDate(addMonths(currentDate, 1))}
          className="flex items-center space-x-2 px-4 py-2 bg-primary rounded-lg text-text hover:bg-bg-secondary transition-all duration-300"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center py-2 text-text-secondary font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {allDays.map((date, index) => {
          const status = getAvailabilityStatus(date);
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          const availability = isSameMonth(date, monthStart) ? getAvailabilityForDate(date) : null;
          
          return (
            <motion.button
              key={index}
              onClick={() => handleDateClick(date)}
              onHoverStart={() => setHoveredDate(date)}
              onHoverEnd={() => setHoveredDate(null)}
              className={`relative aspect-square rounded-xl transition-all duration-300 overflow-hidden ${
                isSelected 
                  ? 'ring-2 ring-gold bg-gold bg-opacity-20' 
                  : status === 'fully-booked' 
                    ? 'bg-red-500 bg-opacity-20 cursor-not-allowed' 
                    : status === 'limited' 
                      ? 'bg-yellow-500 bg-opacity-20' 
                      : status === 'available' 
                        ? 'bg-green-500 bg-opacity-10 hover:bg-green-500 hover:bg-opacity-20' 
                        : 'bg-transparent cursor-pointer'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === 'fully-booked'}
            >
              {/* Date */}
              <div className="absolute top-2 left-2">
                <span className={`text-sm font-medium ${
                  !isSameMonth(date, monthStart) ? 'text-text-secondary/50' : 
                  status === 'fully-booked' ? 'text-red-400' : 
                  status === 'limited' ? 'text-yellow-400' : 
                  'text-text'
                }`}>
                  {format(date, 'd')}
                </span>
              </div>

              {/* Availability Indicator */}
              {isSameMonth(date, monthStart) && status !== 'other-month' && (
                <div className="absolute bottom-2 left-2 right-2">
                  {status === 'fully-booked' ? (
                    <div className="flex items-center justify-center space-x-1 text-red-400 text-xs">
                      <Users className="w-3 h-3" />
                      <span>Full</span>
                    </div>
                  ) : (
                    <div className={`flex items-center justify-center space-x-1 text-xs ${
                      status === 'limited' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      <Home className="w-3 h-3" />
                      <span>{availability} left</span>
                    </div>
                  )}
                </div>
              )}

              {/* Selected Date Overlay */}
              {isSelected && (
                <motion.div
                  className="absolute inset-0 bg-gold bg-opacity-10 rounded-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* Today Indicator */}
              {isSameDay(date, new Date()) && isSameMonth(date, monthStart) && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <motion.div
          className="mt-6 p-4 bg-primary rounded-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-gold">Selected Date</h4>
              <p className="text-text">{format(selectedDate, 'EEEE, MMMM do, yyyy')}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-text-secondary">Availability</p>
              <p className="text-2xl font-bold gradient-text">
                {getAvailabilityForDate(selectedDate)}
              </p>
              <p className="text-sm text-text-secondary">
                {roomTypes.find(r => r.id === selectedRoomType)?.name} left
              </p>
            </div>
          </div>
          <motion.button
            className="btn mt-4 w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onDateSelect && onDateSelect(selectedDate, selectedRoomType)}
          >
            Book Now for {format(selectedDate, 'MMM do, yyyy')}
          </motion.button>
        </motion.div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 bg-opacity-20 rounded"></div>
          <span className="text-sm text-text-secondary">Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 bg-opacity-20 rounded"></div>
          <span className="text-sm text-text-secondary">Limited</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 bg-opacity-20 rounded"></div>
          <span className="text-sm text-text-secondary">Fully Booked</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gold bg-opacity-20 rounded ring-2 ring-gold"></div>
          <span className="text-sm text-text-secondary">Selected</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailabilityCalendar;
