package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSpecificStructsAwayFromResidence.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPSpecificStructsAwayFromResidence extends entity.HOPDwellingScheduleCov {
  protected HOPSpecificStructsAwayFromResidence()  {
    super((java.lang.Void)null);
  }
  
  public HOPSpecificStructsAwayFromResidence(entity.PolicyPeriod branch)  {
    super(branch, "zo8jgu75d357q794cno84vh0338");
  }
  
  public HOPSpecificStructsAwayFromResidence(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zo8jgu75d357q794cno84vh0338");
  }
  
  public productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSched createAndAddScheduledItemHOPSpecificStructsAwayFromResidenceSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSched> getScheduledItemHOPSpecificStructsAwayFromResidenceSchedList() {
    java.util.List<productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPSpecificStructsAwayFromResidenceSched(productmodel.ScheduledItemHOPSpecificStructsAwayFromResidenceSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPSpecificStructsAwayFromResidenceInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPSpecificStructsAwayFromResidence>() {
      public productmodel.HOPSpecificStructsAwayFromResidence newEmptyInstance() {
        return new productmodel.HOPSpecificStructsAwayFromResidence();
      }
      
      
    });
  }
}