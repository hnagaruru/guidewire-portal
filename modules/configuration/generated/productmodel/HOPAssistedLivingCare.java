package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPAssistedLivingCare.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPAssistedLivingCare extends entity.HOPLineScheduleCov {
  protected HOPAssistedLivingCare()  {
    super((java.lang.Void)null);
  }
  
  public HOPAssistedLivingCare(entity.PolicyPeriod branch)  {
    super(branch, "z4lhib5av546s2ko4naf3s8crf8");
  }
  
  public HOPAssistedLivingCare(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z4lhib5av546s2ko4naf3s8crf8");
  }
  
  public productmodel.ScheduledItemHOPAssistedLivingCareSched createAndAddScheduledItemHOPAssistedLivingCareSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPAssistedLivingCareSchedImpl(scheduledItemEntity);
  }
  
  public java.util.List<productmodel.ScheduledItemHOPAssistedLivingCareSched> getScheduledItemHOPAssistedLivingCareSchedList() {
    java.util.List<productmodel.ScheduledItemHOPAssistedLivingCareSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPAssistedLivingCareSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPAssistedLivingCareSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPAssistedLivingCareSched(productmodel.ScheduledItemHOPAssistedLivingCareSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPAssistedLivingCareInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPAssistedLivingCare>() {
      public productmodel.HOPAssistedLivingCare newEmptyInstance() {
        return new productmodel.HOPAssistedLivingCare();
      }
      
      
    });
  }
}