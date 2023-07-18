package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipMiscUnscheduledCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipMiscUnscheduledCov extends entity.ContrEquipPartCov {
  protected ContractorsEquipMiscUnscheduledCov()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipMiscUnscheduledCov(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipMiscUnscheduledCov");
  }
  
  public ContractorsEquipMiscUnscheduledCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipMiscUnscheduledCov");
  }
  
  public productmodel.DirectContractorsEquipMiscUnschItemMaxItemValType getContractorsEquipMiscUnschItemMaxItemValTerm() {
    return (productmodel.DirectContractorsEquipMiscUnschItemMaxItemValType)getCovTerm("ContractorsEquipMiscUnschItemMaxItemVal");
  }
  
  public productmodel.OptionContractorsEquipMiscUnscheduledDeductibleType getContractorsEquipMiscUnscheduledDeductibleTerm() {
    return (productmodel.OptionContractorsEquipMiscUnscheduledDeductibleType)getCovTerm("ContractorsEquipMiscUnscheduledDeductible");
  }
  
  public productmodel.DirectContractorsEquipMiscUnscheduledLimitType getContractorsEquipMiscUnscheduledLimitTerm() {
    return (productmodel.DirectContractorsEquipMiscUnscheduledLimitType)getCovTerm("ContractorsEquipMiscUnscheduledLimit");
  }
  
  public boolean getHasContractorsEquipMiscUnschItemMaxItemValTerm() {
    return hasCovTerm("ContractorsEquipMiscUnschItemMaxItemVal");
  }
  
  public boolean getHasContractorsEquipMiscUnscheduledDeductibleTerm() {
    return hasCovTerm("ContractorsEquipMiscUnscheduledDeductible");
  }
  
  public boolean getHasContractorsEquipMiscUnscheduledLimitTerm() {
    return hasCovTerm("ContractorsEquipMiscUnscheduledLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipMiscUnscheduledCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipMiscUnscheduledCov>() {
      public productmodel.ContractorsEquipMiscUnscheduledCov newEmptyInstance() {
        return new productmodel.ContractorsEquipMiscUnscheduledCov();
      }
      
      
    });
  }
}