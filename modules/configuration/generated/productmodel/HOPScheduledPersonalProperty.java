package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledPersonalProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPScheduledPersonalProperty extends entity.HOPLineScheduleCov {
  protected HOPScheduledPersonalProperty()  {
    super((java.lang.Void)null);
  }
  
  public HOPScheduledPersonalProperty(entity.PolicyPeriod branch)  {
    super(branch, "zlghejgaimjih96iplkcios7bs9");
  }
  
  public HOPScheduledPersonalProperty(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zlghejgaimjih96iplkcios7bs9");
  }
  
  public productmodel.ScheduledItemHOPCovSchedule createAndAddScheduledItemHOPCovSchedule() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPCovScheduleImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPCovSchedule> getScheduledItemHOPCovScheduleList() {
    java.util.List<productmodel.ScheduledItemHOPCovSchedule> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPCovSchedule>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPCovScheduleImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPCovSchedule(productmodel.ScheduledItemHOPCovSchedule scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPScheduledPersonalPropertyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPScheduledPersonalProperty>() {
      public productmodel.HOPScheduledPersonalProperty newEmptyInstance() {
        return new productmodel.HOPScheduledPersonalProperty();
      }
      
      
    });
  }
}