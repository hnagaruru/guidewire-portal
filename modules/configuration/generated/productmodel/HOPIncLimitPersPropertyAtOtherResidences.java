package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIncLimitPersPropertyAtOtherResidences.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPIncLimitPersPropertyAtOtherResidences extends entity.HOPDwellingScheduleCov {
  protected HOPIncLimitPersPropertyAtOtherResidences()  {
    super((java.lang.Void)null);
  }
  
  public HOPIncLimitPersPropertyAtOtherResidences(entity.PolicyPeriod branch)  {
    super(branch, "zbkhgt4jvb1i76oglrok2qsnq09");
  }
  
  public HOPIncLimitPersPropertyAtOtherResidences(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zbkhgt4jvb1i76oglrok2qsnq09");
  }
  
  public productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched createAndAddScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched> getScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSchedList() {
    java.util.List<productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched(productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPIncLimitPersPropertyAtOtherResidencesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPIncLimitPersPropertyAtOtherResidences>() {
      public productmodel.HOPIncLimitPersPropertyAtOtherResidences newEmptyInstance() {
        return new productmodel.HOPIncLimitPersPropertyAtOtherResidences();
      }
      
      
    });
  }
}