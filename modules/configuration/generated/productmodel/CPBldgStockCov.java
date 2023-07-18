package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgStockCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CPBldgStockCov extends entity.CPBuildingCov {
  protected CPBldgStockCov()  {
    super((java.lang.Void)null);
  }
  
  public CPBldgStockCov(entity.PolicyPeriod branch)  {
    super(branch, "CPBldgStockCov");
  }
  
  public CPBldgStockCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CPBldgStockCov");
  }
  
  public productmodel.TypekeyCPBldgStockCovCauseOfLossType getCPBldgStockCovCauseOfLossTerm() {
    return (productmodel.TypekeyCPBldgStockCovCauseOfLossType)getCovTerm("CPBldgStockCovCauseOfLoss");
  }
  
  public productmodel.OptionCPBldgStockCovCoinsuranceType getCPBldgStockCovCoinsuranceTerm() {
    return (productmodel.OptionCPBldgStockCovCoinsuranceType)getCovTerm("CPBldgStockCovCoinsurance");
  }
  
  public productmodel.OptionCPBldgStockCovDeductibleType getCPBldgStockCovDeductibleTerm() {
    return (productmodel.OptionCPBldgStockCovDeductibleType)getCovTerm("CPBldgStockCovDeductible");
  }
  
  public productmodel.GenericCPBldgStockCovExcludeSprinklerType getCPBldgStockCovExcludeSprinklerTerm() {
    return (productmodel.GenericCPBldgStockCovExcludeSprinklerType)getCovTerm("CPBldgStockCovExcludeSprinkler");
  }
  
  public productmodel.GenericCPBldgStockCovExcludeTheftType getCPBldgStockCovExcludeTheftTerm() {
    return (productmodel.GenericCPBldgStockCovExcludeTheftType)getCovTerm("CPBldgStockCovExcludeTheft");
  }
  
  public productmodel.GenericCPBldgStockCovExcludeVandalismType getCPBldgStockCovExcludeVandalismTerm() {
    return (productmodel.GenericCPBldgStockCovExcludeVandalismType)getCovTerm("CPBldgStockCovExcludeVandalism");
  }
  
  public productmodel.DirectCPBldgStockCovLimitType getCPBldgStockCovLimitTerm() {
    return (productmodel.DirectCPBldgStockCovLimitType)getCovTerm("CPBldgStockCovLimit");
  }
  
  public productmodel.TypekeyCPBldgStockCovReportingFormType getCPBldgStockCovReportingFormTerm() {
    return (productmodel.TypekeyCPBldgStockCovReportingFormType)getCovTerm("CPBldgStockCovReportingForm");
  }
  
  public productmodel.TypekeyCPBldgStockCovValuationMethodType getCPBldgStockCovValuationMethodTerm() {
    return (productmodel.TypekeyCPBldgStockCovValuationMethodType)getCovTerm("CPBldgStockCovValuationMethod");
  }
  
  public productmodel.OptionCPBldgStockCovWindDeductibleType getCPBldgStockCovWindDeductibleTerm() {
    return (productmodel.OptionCPBldgStockCovWindDeductibleType)getCovTerm("CPBldgStockCovWindDeductible");
  }
  
  public boolean getHasCPBldgStockCovCauseOfLossTerm() {
    return hasCovTerm("CPBldgStockCovCauseOfLoss");
  }
  
  public boolean getHasCPBldgStockCovCoinsuranceTerm() {
    return hasCovTerm("CPBldgStockCovCoinsurance");
  }
  
  public boolean getHasCPBldgStockCovDeductibleTerm() {
    return hasCovTerm("CPBldgStockCovDeductible");
  }
  
  public boolean getHasCPBldgStockCovExcludeSprinklerTerm() {
    return hasCovTerm("CPBldgStockCovExcludeSprinkler");
  }
  
  public boolean getHasCPBldgStockCovExcludeTheftTerm() {
    return hasCovTerm("CPBldgStockCovExcludeTheft");
  }
  
  public boolean getHasCPBldgStockCovExcludeVandalismTerm() {
    return hasCovTerm("CPBldgStockCovExcludeVandalism");
  }
  
  public boolean getHasCPBldgStockCovLimitTerm() {
    return hasCovTerm("CPBldgStockCovLimit");
  }
  
  public boolean getHasCPBldgStockCovReportingFormTerm() {
    return hasCovTerm("CPBldgStockCovReportingForm");
  }
  
  public boolean getHasCPBldgStockCovValuationMethodTerm() {
    return hasCovTerm("CPBldgStockCovValuationMethod");
  }
  
  public boolean getHasCPBldgStockCovWindDeductibleTerm() {
    return hasCovTerm("CPBldgStockCovWindDeductible");
  }
  
  static {
    com.guidewire._generated.productmodel.CPBldgStockCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CPBldgStockCov>() {
      public productmodel.CPBldgStockCov newEmptyInstance() {
        return new productmodel.CPBldgStockCov();
      }
      
      
    });
  }
}