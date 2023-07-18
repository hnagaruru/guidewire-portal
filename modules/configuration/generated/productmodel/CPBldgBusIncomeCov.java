package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgBusIncomeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CPBldgBusIncomeCov extends entity.CPBuildingCov {
  protected CPBldgBusIncomeCov()  {
    super((java.lang.Void)null);
  }
  
  public CPBldgBusIncomeCov(entity.PolicyPeriod branch)  {
    super(branch, "CPBldgBusIncomeCov");
  }
  
  public CPBldgBusIncomeCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CPBldgBusIncomeCov");
  }
  
  public productmodel.DirectBusIncomeMfgLimitType getBusIncomeMfgLimitTerm() {
    return (productmodel.DirectBusIncomeMfgLimitType)getCovTerm("BusIncomeMfgLimit");
  }
  
  public productmodel.DirectBusIncomeOtherLimitType getBusIncomeOtherLimitTerm() {
    return (productmodel.DirectBusIncomeOtherLimitType)getCovTerm("BusIncomeOtherLimit");
  }
  
  public productmodel.DirectBusIncomeRentalLimitType getBusIncomeRentalLimitTerm() {
    return (productmodel.DirectBusIncomeRentalLimitType)getCovTerm("BusIncomeRentalLimit");
  }
  
  public productmodel.TypekeyCPBldgBusIncomeCovCauseOfLossType getCPBldgBusIncomeCovCauseOfLossTerm() {
    return (productmodel.TypekeyCPBldgBusIncomeCovCauseOfLossType)getCovTerm("CPBldgBusIncomeCovCauseOfLoss");
  }
  
  public productmodel.OptionCPBldgBusIncomeCovCoinsuranceType getCPBldgBusIncomeCovCoinsuranceTerm() {
    return (productmodel.OptionCPBldgBusIncomeCovCoinsuranceType)getCovTerm("CPBldgBusIncomeCovCoinsurance");
  }
  
  public productmodel.OptionCPBldgBusIncomeCovPeriodType getCPBldgBusIncomeCovPeriodTerm() {
    return (productmodel.OptionCPBldgBusIncomeCovPeriodType)getCovTerm("CPBldgBusIncomeCovPeriod");
  }
  
  public productmodel.OptionCPBldgBusIncomeCovWaitingType getCPBldgBusIncomeCovWaitingTerm() {
    return (productmodel.OptionCPBldgBusIncomeCovWaitingType)getCovTerm("CPBldgBusIncomeCovWaiting");
  }
  
  public boolean getHasBusIncomeMfgLimitTerm() {
    return hasCovTerm("BusIncomeMfgLimit");
  }
  
  public boolean getHasBusIncomeOtherLimitTerm() {
    return hasCovTerm("BusIncomeOtherLimit");
  }
  
  public boolean getHasBusIncomeRentalLimitTerm() {
    return hasCovTerm("BusIncomeRentalLimit");
  }
  
  public boolean getHasCPBldgBusIncomeCovCauseOfLossTerm() {
    return hasCovTerm("CPBldgBusIncomeCovCauseOfLoss");
  }
  
  public boolean getHasCPBldgBusIncomeCovCoinsuranceTerm() {
    return hasCovTerm("CPBldgBusIncomeCovCoinsurance");
  }
  
  public boolean getHasCPBldgBusIncomeCovPeriodTerm() {
    return hasCovTerm("CPBldgBusIncomeCovPeriod");
  }
  
  public boolean getHasCPBldgBusIncomeCovWaitingTerm() {
    return hasCovTerm("CPBldgBusIncomeCovWaiting");
  }
  
  static {
    com.guidewire._generated.productmodel.CPBldgBusIncomeCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CPBldgBusIncomeCov>() {
      public productmodel.CPBldgBusIncomeCov newEmptyInstance() {
        return new productmodel.CPBldgBusIncomeCov();
      }
      
      
    });
  }
}