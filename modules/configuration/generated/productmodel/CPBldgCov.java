package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CPBldgCov extends entity.CPBuildingCov {
  protected CPBldgCov()  {
    super((java.lang.Void)null);
  }
  
  public CPBldgCov(entity.PolicyPeriod branch)  {
    super(branch, "CPBldgCov");
  }
  
  public CPBldgCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CPBldgCov");
  }
  
  public productmodel.OptionCPBldgCovAutoIncreaseType getCPBldgCovAutoIncreaseTerm() {
    return (productmodel.OptionCPBldgCovAutoIncreaseType)getCovTerm("CPBldgCovAutoIncrease");
  }
  
  public productmodel.TypekeyCPBldgCovCauseOfLossType getCPBldgCovCauseOfLossTerm() {
    return (productmodel.TypekeyCPBldgCovCauseOfLossType)getCovTerm("CPBldgCovCauseOfLoss");
  }
  
  public productmodel.OptionCPBldgCovCoinsuranceType getCPBldgCovCoinsuranceTerm() {
    return (productmodel.OptionCPBldgCovCoinsuranceType)getCovTerm("CPBldgCovCoinsurance");
  }
  
  public productmodel.OptionCPBldgCovDeductibleType getCPBldgCovDeductibleTerm() {
    return (productmodel.OptionCPBldgCovDeductibleType)getCovTerm("CPBldgCovDeductible");
  }
  
  public productmodel.GenericCPBldgCovExcludeSprinklerType getCPBldgCovExcludeSprinklerTerm() {
    return (productmodel.GenericCPBldgCovExcludeSprinklerType)getCovTerm("CPBldgCovExcludeSprinkler");
  }
  
  public productmodel.GenericCPBldgCovExcludeTheftType getCPBldgCovExcludeTheftTerm() {
    return (productmodel.GenericCPBldgCovExcludeTheftType)getCovTerm("CPBldgCovExcludeTheft");
  }
  
  public productmodel.GenericCPBldgCovExcludeVandalismType getCPBldgCovExcludeVandalismTerm() {
    return (productmodel.GenericCPBldgCovExcludeVandalismType)getCovTerm("CPBldgCovExcludeVandalism");
  }
  
  public productmodel.DirectCPBldgCovLimitType getCPBldgCovLimitTerm() {
    return (productmodel.DirectCPBldgCovLimitType)getCovTerm("CPBldgCovLimit");
  }
  
  public productmodel.TypekeyCPBldgCovValuationMethodType getCPBldgCovValuationMethodTerm() {
    return (productmodel.TypekeyCPBldgCovValuationMethodType)getCovTerm("CPBldgCovValuationMethod");
  }
  
  public productmodel.OptionCPBldgCovWindDeductibleType getCPBldgCovWindDeductibleTerm() {
    return (productmodel.OptionCPBldgCovWindDeductibleType)getCovTerm("CPBldgCovWindDeductible");
  }
  
  public boolean getHasCPBldgCovAutoIncreaseTerm() {
    return hasCovTerm("CPBldgCovAutoIncrease");
  }
  
  public boolean getHasCPBldgCovCauseOfLossTerm() {
    return hasCovTerm("CPBldgCovCauseOfLoss");
  }
  
  public boolean getHasCPBldgCovCoinsuranceTerm() {
    return hasCovTerm("CPBldgCovCoinsurance");
  }
  
  public boolean getHasCPBldgCovDeductibleTerm() {
    return hasCovTerm("CPBldgCovDeductible");
  }
  
  public boolean getHasCPBldgCovExcludeSprinklerTerm() {
    return hasCovTerm("CPBldgCovExcludeSprinkler");
  }
  
  public boolean getHasCPBldgCovExcludeTheftTerm() {
    return hasCovTerm("CPBldgCovExcludeTheft");
  }
  
  public boolean getHasCPBldgCovExcludeVandalismTerm() {
    return hasCovTerm("CPBldgCovExcludeVandalism");
  }
  
  public boolean getHasCPBldgCovLimitTerm() {
    return hasCovTerm("CPBldgCovLimit");
  }
  
  public boolean getHasCPBldgCovValuationMethodTerm() {
    return hasCovTerm("CPBldgCovValuationMethod");
  }
  
  public boolean getHasCPBldgCovWindDeductibleTerm() {
    return hasCovTerm("CPBldgCovWindDeductible");
  }
  
  static {
    com.guidewire._generated.productmodel.CPBldgCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CPBldgCov>() {
      public productmodel.CPBldgCov newEmptyInstance() {
        return new productmodel.CPBldgCov();
      }
      
      
    });
  }
}