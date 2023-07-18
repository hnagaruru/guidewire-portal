package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPTrust.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPTrust extends entity.HOPLineScheduleCond {
  protected HOPTrust()  {
    super((java.lang.Void)null);
  }
  
  public HOPTrust(entity.PolicyPeriod branch)  {
    super(branch, "zn2jq51fencbp7a30cd7hqkjno8");
  }
  
  public HOPTrust(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zn2jq51fencbp7a30cd7hqkjno8");
  }
  
  public productmodel.ScheduledItemHOPTrustSched createAndAddScheduledItemHOPTrustSched() {
    entity.ScheduledItem scheduledItemEntity  =  createAndAddScheduledItem();
    return new com.guidewire._generated.productmodel.ScheduledItemHOPTrustSchedImpl(scheduledItemEntity);
  }
  
  public productmodel.GenericHOPTrustAddressType getHOPTrustAddressTerm() {
    return (productmodel.GenericHOPTrustAddressType)getCovTerm("z63goqjrjffocdg578vnp3lsiga");
  }
  
  public productmodel.GenericHOPTrustNameType getHOPTrustNameTerm() {
    return (productmodel.GenericHOPTrustNameType)getCovTerm("zkvhk7lnoo8su13ajcc6gkhhf2a");
  }
  
  public boolean getHasHOPTrustAddressTerm() {
    return hasCovTerm("z63goqjrjffocdg578vnp3lsiga");
  }
  
  public boolean getHasHOPTrustNameTerm() {
    return hasCovTerm("zkvhk7lnoo8su13ajcc6gkhhf2a");
  }
  
  public java.util.List<productmodel.ScheduledItemHOPTrustSched> getScheduledItemHOPTrustSchedList() {
    java.util.List<productmodel.ScheduledItemHOPTrustSched> scheduledItemList  =  new java.util.ArrayList<productmodel.ScheduledItemHOPTrustSched>();
    entity.ScheduledItem[] scheduledItemEntityArray  =  getScheduledItems();
    for(entity.ScheduledItem scheduledItemEntity : scheduledItemEntityArray) {
      scheduledItemList.add(new com.guidewire._generated.productmodel.ScheduledItemHOPTrustSchedImpl(scheduledItemEntity));
    };
    return scheduledItemList;
  }
  
  public void removeScheduledItemHOPTrustSched(productmodel.ScheduledItemHOPTrustSched scheduledItem) {
    removeScheduledItem(scheduledItem.getScheduledItemEntity());
  }
  
  static {
    com.guidewire._generated.productmodel.HOPTrustInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPTrust>() {
      public productmodel.HOPTrust newEmptyInstance() {
        return new productmodel.HOPTrust();
      }
      
      
    });
  }
}