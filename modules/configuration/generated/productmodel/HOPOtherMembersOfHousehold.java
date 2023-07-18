package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPOtherMembersOfHousehold.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPOtherMembersOfHousehold extends entity.HOPLineScheduleCond {
  protected HOPOtherMembersOfHousehold()  {
    super((java.lang.Void)null);
  }
  
  public HOPOtherMembersOfHousehold(entity.PolicyPeriod branch)  {
    super(branch, "zbtjeorlj3icresdsmqolgac40b");
  }
  
  public HOPOtherMembersOfHousehold(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zbtjeorlj3icresdsmqolgac40b");
  }
  
  public productmodel.ScheduledItemHOPOtherMembersOfHouseholdSched createAndAddScheduledItemHOPOtherMembersOfHouseholdSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPOtherMembersOfHouseholdSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPOtherMembersOfHouseholdSched> getScheduledItemHOPOtherMembersOfHouseholdSchedList() {
    java.util.List<productmodel.ScheduledItemHOPOtherMembersOfHouseholdSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPOtherMembersOfHouseholdSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPOtherMembersOfHouseholdSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPOtherMembersOfHouseholdSched(productmodel.ScheduledItemHOPOtherMembersOfHouseholdSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPOtherMembersOfHouseholdInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPOtherMembersOfHousehold>() {
      public productmodel.HOPOtherMembersOfHousehold newEmptyInstance() {
        return new productmodel.HOPOtherMembersOfHousehold();
      }
      
      
    });
  }
}