package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPAddlResidenceRentedToOthers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPAddlResidenceRentedToOthers extends entity.HOPLineScheduleCond {
  protected HOPAddlResidenceRentedToOthers()  {
    super((java.lang.Void)null);
  }
  
  public HOPAddlResidenceRentedToOthers(entity.PolicyPeriod branch)  {
    super(branch, "zfqj66u8ieogne2rpukobappaca");
  }
  
  public HOPAddlResidenceRentedToOthers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zfqj66u8ieogne2rpukobappaca");
  }
  
  public productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSched createAndAddScheduledItemHOPAddlResidenceRentedToOthersSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSched> getScheduledItemHOPAddlResidenceRentedToOthersSchedList() {
    java.util.List<productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPAddlResidenceRentedToOthersSched(productmodel.ScheduledItemHOPAddlResidenceRentedToOthersSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPAddlResidenceRentedToOthersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPAddlResidenceRentedToOthers>() {
      public productmodel.HOPAddlResidenceRentedToOthers newEmptyInstance() {
        return new productmodel.HOPAddlResidenceRentedToOthers();
      }
      
      
    });
  }
}