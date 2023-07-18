package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBPPCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CPBPPCov extends entity.CPBuildingCov {
  protected CPBPPCov()  {
    super((java.lang.Void)null);
  }
  
  public CPBPPCov(entity.PolicyPeriod branch)  {
    super(branch, "CPBPPCov");
  }
  
  public CPBPPCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CPBPPCov");
  }
  
  public productmodel.TypekeyCPBPPCovCauseOfLossType getCPBPPCovCauseOfLossTerm() {
    return (productmodel.TypekeyCPBPPCovCauseOfLossType)getCovTerm("CPBPPCovCauseOfLoss");
  }
  
  public productmodel.OptionCPBPPCovCoinsuranceType getCPBPPCovCoinsuranceTerm() {
    return (productmodel.OptionCPBPPCovCoinsuranceType)getCovTerm("CPBPPCovCoinsurance");
  }
  
  public productmodel.OptionCPBPPCovDeductibleType getCPBPPCovDeductibleTerm() {
    return (productmodel.OptionCPBPPCovDeductibleType)getCovTerm("CPBPPCovDeductible");
  }
  
  public productmodel.GenericCPBPPCovExcludeSprinklerType getCPBPPCovExcludeSprinklerTerm() {
    return (productmodel.GenericCPBPPCovExcludeSprinklerType)getCovTerm("CPBPPCovExcludeSprinkler");
  }
  
  public productmodel.GenericCPBPPCovExcludeTheftType getCPBPPCovExcludeTheftTerm() {
    return (productmodel.GenericCPBPPCovExcludeTheftType)getCovTerm("CPBPPCovExcludeTheft");
  }
  
  public productmodel.GenericCPBPPCovExcludeVandalismType getCPBPPCovExcludeVandalismTerm() {
    return (productmodel.GenericCPBPPCovExcludeVandalismType)getCovTerm("CPBPPCovExcludeVandalism");
  }
  
  public productmodel.DirectCPBPPCovLimitType getCPBPPCovLimitTerm() {
    return (productmodel.DirectCPBPPCovLimitType)getCovTerm("CPBPPCovLimit");
  }
  
  public productmodel.TypekeyCPBPPCovReportingFormType getCPBPPCovReportingFormTerm() {
    return (productmodel.TypekeyCPBPPCovReportingFormType)getCovTerm("CPBPPCovReportingForm");
  }
  
  public productmodel.OptionCPBPPCovWindDeductibleType getCPBPPCovWindDeductibleTerm() {
    return (productmodel.OptionCPBPPCovWindDeductibleType)getCovTerm("CPBPPCovWindDeductible");
  }
  
  public productmodel.TypekeyCPBPPValuationMethodType getCPBPPValuationMethodTerm() {
    return (productmodel.TypekeyCPBPPValuationMethodType)getCovTerm("CPBPPValuationMethod");
  }
  
  public boolean getHasCPBPPCovCauseOfLossTerm() {
    return hasCovTerm("CPBPPCovCauseOfLoss");
  }
  
  public boolean getHasCPBPPCovCoinsuranceTerm() {
    return hasCovTerm("CPBPPCovCoinsurance");
  }
  
  public boolean getHasCPBPPCovDeductibleTerm() {
    return hasCovTerm("CPBPPCovDeductible");
  }
  
  public boolean getHasCPBPPCovExcludeSprinklerTerm() {
    return hasCovTerm("CPBPPCovExcludeSprinkler");
  }
  
  public boolean getHasCPBPPCovExcludeTheftTerm() {
    return hasCovTerm("CPBPPCovExcludeTheft");
  }
  
  public boolean getHasCPBPPCovExcludeVandalismTerm() {
    return hasCovTerm("CPBPPCovExcludeVandalism");
  }
  
  public boolean getHasCPBPPCovLimitTerm() {
    return hasCovTerm("CPBPPCovLimit");
  }
  
  public boolean getHasCPBPPCovReportingFormTerm() {
    return hasCovTerm("CPBPPCovReportingForm");
  }
  
  public boolean getHasCPBPPCovWindDeductibleTerm() {
    return hasCovTerm("CPBPPCovWindDeductible");
  }
  
  public boolean getHasCPBPPValuationMethodTerm() {
    return hasCovTerm("CPBPPValuationMethod");
  }
  
  static {
    com.guidewire._generated.productmodel.CPBPPCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CPBPPCov>() {
      public productmodel.CPBPPCov newEmptyInstance() {
        return new productmodel.CPBPPCov();
      }
      
      
    });
  }
}