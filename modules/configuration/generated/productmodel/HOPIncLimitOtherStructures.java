package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIncLimitOtherStructures.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPIncLimitOtherStructures extends entity.HOPDwellingScheduleCov {
  protected HOPIncLimitOtherStructures()  {
    super((java.lang.Void)null);
  }
  
  public HOPIncLimitOtherStructures(entity.PolicyPeriod branch)  {
    super(branch, "z4bjaqp9ugpiqe79vlsr61jkfb9");
  }
  
  public HOPIncLimitOtherStructures(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z4bjaqp9ugpiqe79vlsr61jkfb9");
  }
  
  public productmodel.ScheduledItemHOPIncLimitOtherStructuresSched createAndAddScheduledItemHOPIncLimitOtherStructuresSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPIncLimitOtherStructuresSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPIncLimitOtherStructuresSched> getScheduledItemHOPIncLimitOtherStructuresSchedList() {
    java.util.List<productmodel.ScheduledItemHOPIncLimitOtherStructuresSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPIncLimitOtherStructuresSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPIncLimitOtherStructuresSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPIncLimitOtherStructuresSched(productmodel.ScheduledItemHOPIncLimitOtherStructuresSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPIncLimitOtherStructuresInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPIncLimitOtherStructures>() {
      public productmodel.HOPIncLimitOtherStructures newEmptyInstance() {
        return new productmodel.HOPIncLimitOtherStructures();
      }
      
      
    });
  }
}