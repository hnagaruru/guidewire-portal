package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBusIncPayrollCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPBusIncPayrollCov extends entity.BOPBuildingCov {
  protected BOPBusIncPayrollCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPBusIncPayrollCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPBusIncPayrollCov");
  }
  
  public BOPBusIncPayrollCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPBusIncPayrollCov");
  }
  
  public productmodel.OptionBusIncomeOrdPayrollType getBusIncomeOrdPayrollTerm() {
    return (productmodel.OptionBusIncomeOrdPayrollType)getCovTerm("BusIncomeOrdPayroll");
  }
  
  public boolean getHasBusIncomeOrdPayrollTerm() {
    return hasCovTerm("BusIncomeOrdPayroll");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPBusIncPayrollCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPBusIncPayrollCov>() {
      public productmodel.BOPBusIncPayrollCov newEmptyInstance() {
        return new productmodel.BOPBusIncPayrollCov();
      }
      
      
    });
  }
}