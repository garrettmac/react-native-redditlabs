
#import "RNRedditLabs.h"

@implementation RNRedditLabs

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()
//----------------------------------------
/*RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}*/
RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];

}

//----------------------------------------
/*- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
}*/

//----------------------------------------
@end
