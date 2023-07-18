package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedLiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAOwnedLiabilityCov extends entity.BusinessAutoCov {
  protected BAOwnedLiabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public BAOwnedLiabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "BAOwnedLiabilityCov");
  }
  
  public BAOwnedLiabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAOwnedLiabilityCov");
  }
  
  public productmodel.TypekeyBALiabilityTortType getBALiabilityTortTerm() {
    return (productmodel.TypekeyBALiabilityTortType)getCovTerm("BALiabilityTort");
  }
  
  public productmodel.PackageBAOwnedLiabilityLimitType getBAOwnedLiabilityLimitTerm() {
    return (productmodel.PackageBAOwnedLiabilityLimitType)getCovTerm("BAOwnedLiabilityLimit");
  }
  
  public boolean getHasBALiabilityTortTerm() {
    return hasCovTerm("BALiabilityTort");
  }
  
  public boolean getHasBAOwnedLiabilityLimitTerm() {
    return hasCovTerm("BAOwnedLiabilityLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BAOwnedLiabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAOwnedLiabilityCov>() {
      public productmodel.BAOwnedLiabilityCov newEmptyInstance() {
        return new productmodel.BAOwnedLiabilityCov();
      }
      
      
    });
  }
}