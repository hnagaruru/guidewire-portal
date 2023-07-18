package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledLandlordsFurnishing.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPScheduledLandlordsFurnishing extends entity.HOPDwellingScheduleCov {
  protected HOPScheduledLandlordsFurnishing()  {
    super((java.lang.Void)null);
  }
  
  public HOPScheduledLandlordsFurnishing(entity.PolicyPeriod branch)  {
    super(branch, "zs8hqfgnkr1v9396ccjbc8pbki8");
  }
  
  public HOPScheduledLandlordsFurnishing(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zs8hqfgnkr1v9396ccjbc8pbki8");
  }
  
  public productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSched createAndAddScheduledItemHOPScheduledLandlordsFurnishingSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSched> getScheduledItemHOPScheduledLandlordsFurnishingSchedList() {
    java.util.List<productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPScheduledLandlordsFurnishingSched(productmodel.ScheduledItemHOPScheduledLandlordsFurnishingSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPScheduledLandlordsFurnishingInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPScheduledLandlordsFurnishing>() {
      public productmodel.HOPScheduledLandlordsFurnishing newEmptyInstance() {
        return new productmodel.HOPScheduledLandlordsFurnishing();
      }
      
      
    });
  }
}