package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PALiabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PALiabilityCov extends entity.PersonalAutoCov {
  protected PALiabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public PALiabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "PALiabilityCov");
  }
  
  public PALiabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PALiabilityCov");
  }
  
  public boolean getHasPAFullLimitedTortTerm() {
    return hasCovTerm("PAFullLimitedTort");
  }
  
  public boolean getHasPALiabilityTerm() {
    return hasCovTerm("PALiability");
  }
  
  public productmodel.TypekeyPAFullLimitedTortType getPAFullLimitedTortTerm() {
    return (productmodel.TypekeyPAFullLimitedTortType)getCovTerm("PAFullLimitedTort");
  }
  
  public productmodel.PackagePALiabilityType getPALiabilityTerm() {
    return (productmodel.PackagePALiabilityType)getCovTerm("PALiability");
  }
  
  static {
    com.guidewire._generated.productmodel.PALiabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PALiabilityCov>() {
      public productmodel.PALiabilityCov newEmptyInstance() {
        return new productmodel.PALiabilityCov();
      }
      
      
    });
  }
}