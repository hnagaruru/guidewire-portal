package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CADeathDisabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CADeathDisabilityCov extends entity.BAStateCov {
  protected CADeathDisabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public CADeathDisabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "CADeathDisabilityCov");
  }
  
  public CADeathDisabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CADeathDisabilityCov");
  }
  
  public productmodel.OptionDeathBenefitLimitType getDeathBenefitLimitTerm() {
    return (productmodel.OptionDeathBenefitLimitType)getCovTerm("DeathBenefitLimit");
  }
  
  public productmodel.OptionDisabilityBenefitLimitType getDisabilityBenefitLimitTerm() {
    return (productmodel.OptionDisabilityBenefitLimitType)getCovTerm("DisabilityBenefitLimit");
  }
  
  public boolean getHasDeathBenefitLimitTerm() {
    return hasCovTerm("DeathBenefitLimit");
  }
  
  public boolean getHasDisabilityBenefitLimitTerm() {
    return hasCovTerm("DisabilityBenefitLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.CADeathDisabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CADeathDisabilityCov>() {
      public productmodel.CADeathDisabilityCov newEmptyInstance() {
        return new productmodel.CADeathDisabilityCov();
      }
      
      
    });
  }
}