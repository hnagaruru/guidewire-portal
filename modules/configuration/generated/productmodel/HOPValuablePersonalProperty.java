package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPValuablePersonalProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPValuablePersonalProperty extends entity.HOPLineScheduleCov {
  protected HOPValuablePersonalProperty()  {
    super((java.lang.Void)null);
  }
  
  public HOPValuablePersonalProperty(entity.PolicyPeriod branch)  {
    super(branch, "zc1jk38ardj581cfmn0e395i758");
  }
  
  public HOPValuablePersonalProperty(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zc1jk38ardj581cfmn0e395i758");
  }
  
  public productmodel.ScheduledItemHOPCovScheduleValuables createAndAddScheduledItemHOPCovScheduleValuables() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPCovScheduleValuablesImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPCovScheduleValuables> getScheduledItemHOPCovScheduleValuablesList() {
    java.util.List<productmodel.ScheduledItemHOPCovScheduleValuables> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPCovScheduleValuables>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPCovScheduleValuablesImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPCovScheduleValuables(productmodel.ScheduledItemHOPCovScheduleValuables scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPValuablePersonalPropertyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPValuablePersonalProperty>() {
      public productmodel.HOPValuablePersonalProperty newEmptyInstance() {
        return new productmodel.HOPValuablePersonalProperty();
      }
      
      
    });
  }
}