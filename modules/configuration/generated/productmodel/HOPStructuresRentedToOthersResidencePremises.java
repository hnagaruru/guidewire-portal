package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPStructuresRentedToOthersResidencePremises.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPStructuresRentedToOthersResidencePremises extends entity.HOPDwellingScheduleCov {
  protected HOPStructuresRentedToOthersResidencePremises()  {
    super((java.lang.Void)null);
  }
  
  public HOPStructuresRentedToOthersResidencePremises(entity.PolicyPeriod branch)  {
    super(branch, "zpajido164efucetokjge4q45e9");
  }
  
  public HOPStructuresRentedToOthersResidencePremises(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zpajido164efucetokjge4q45e9");
  }
  
  public productmodel.ScheduledItemHOPStructsRentedToOthersSched createAndAddScheduledItemHOPStructsRentedToOthersSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPStructsRentedToOthersSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPStructsRentedToOthersSched> getScheduledItemHOPStructsRentedToOthersSchedList() {
    java.util.List<productmodel.ScheduledItemHOPStructsRentedToOthersSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPStructsRentedToOthersSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPStructsRentedToOthersSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPStructsRentedToOthersSched(productmodel.ScheduledItemHOPStructsRentedToOthersSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPStructuresRentedToOthersResidencePremisesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPStructuresRentedToOthersResidencePremises>() {
      public productmodel.HOPStructuresRentedToOthersResidencePremises newEmptyInstance() {
        return new productmodel.HOPStructuresRentedToOthersResidencePremises();
      }
      
      
    });
  }
}