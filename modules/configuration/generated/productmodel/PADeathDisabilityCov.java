package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PADeathDisabilityCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PADeathDisabilityCov extends entity.PersonalAutoCov {
  protected PADeathDisabilityCov()  {
    super((java.lang.Void)null);
  }
  
  public PADeathDisabilityCov(entity.PolicyPeriod branch)  {
    super(branch, "PADeathDisabilityCov");
  }
  
  public PADeathDisabilityCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PADeathDisabilityCov");
  }
  
  public productmodel.OptionDeathBenefitType getDeathBenefitTerm() {
    return (productmodel.OptionDeathBenefitType)getCovTerm("DeathBenefit");
  }
  
  public productmodel.OptionDisabilityBenefitType getDisabilityBenefitTerm() {
    return (productmodel.OptionDisabilityBenefitType)getCovTerm("DisabilityBenefit");
  }
  
  public productmodel.OptionDismembermentBenefitLimitType getDismembermentBenefitLimitTerm() {
    return (productmodel.OptionDismembermentBenefitLimitType)getCovTerm("DismembermentBenefitLimit");
  }
  
  public boolean getHasDeathBenefitTerm() {
    return hasCovTerm("DeathBenefit");
  }
  
  public boolean getHasDisabilityBenefitTerm() {
    return hasCovTerm("DisabilityBenefit");
  }
  
  public boolean getHasDismembermentBenefitLimitTerm() {
    return hasCovTerm("DismembermentBenefitLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.PADeathDisabilityCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PADeathDisabilityCov>() {
      public productmodel.PADeathDisabilityCov newEmptyInstance() {
        return new productmodel.PADeathDisabilityCov();
      }
      
      
    });
  }
}