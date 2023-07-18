package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPAssistedLivingCareItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPAssistedLivingCareItem extends entity.HOPLineSchCovItemCov {
  protected HOPAssistedLivingCareItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPAssistedLivingCareItem(entity.PolicyPeriod branch)  {
    super(branch, "z1gguiuovtplr3j4rucqdv0stra");
  }
  
  public HOPAssistedLivingCareItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z1gguiuovtplr3j4rucqdv0stra");
  }
  
  public productmodel.OptionHOPAssistedLivingCareItemLiabilityLimitType getHOPAssistedLivingCareItemLiabilityLimitTerm() {
    return (productmodel.OptionHOPAssistedLivingCareItemLiabilityLimitType)getCovTerm("zloh23v5tvo9h22u9s6ujgdqg5a");
  }
  
  public productmodel.DirectHOPAssistedLivingCareItemLimitCovCType getHOPAssistedLivingCareItemLimitCovCTerm() {
    return (productmodel.DirectHOPAssistedLivingCareItemLimitCovCType)getCovTerm("zsfiibsn5vfk95pvjsfnnvdf6h8");
  }
  
  public boolean getHasHOPAssistedLivingCareItemLiabilityLimitTerm() {
    return hasCovTerm("zloh23v5tvo9h22u9s6ujgdqg5a");
  }
  
  public boolean getHasHOPAssistedLivingCareItemLimitCovCTerm() {
    return hasCovTerm("zsfiibsn5vfk95pvjsfnnvdf6h8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPAssistedLivingCareItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPAssistedLivingCareItem>() {
      public productmodel.HOPAssistedLivingCareItem newEmptyInstance() {
        return new productmodel.HOPAssistedLivingCareItem();
      }
      
      
    });
  }
}