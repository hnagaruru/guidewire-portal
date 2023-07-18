package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipEmployeesTools.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipEmployeesTools extends entity.ContrEquipPartCov {
  protected ContractorsEquipEmployeesTools()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipEmployeesTools(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipEmployeesTools");
  }
  
  public ContractorsEquipEmployeesTools(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipEmployeesTools");
  }
  
  public productmodel.OptionContractorsEquipEmployeesToolsDeductibleType getContractorsEquipEmployeesToolsDeductibleTerm() {
    return (productmodel.OptionContractorsEquipEmployeesToolsDeductibleType)getCovTerm("ContractorsEquipEmployeesToolsDeductible");
  }
  
  public productmodel.DirectContractorsEquipEmployeesToolsLimitType getContractorsEquipEmployeesToolsLimitTerm() {
    return (productmodel.DirectContractorsEquipEmployeesToolsLimitType)getCovTerm("ContractorsEquipEmployeesToolsLimit");
  }
  
  public productmodel.DirectContractorsEquipEmployeesToolsMaxIndivItemValType getContractorsEquipEmployeesToolsMaxIndivItemValTerm() {
    return (productmodel.DirectContractorsEquipEmployeesToolsMaxIndivItemValType)getCovTerm("ContractorsEquipEmployeesToolsMaxIndivItemVal");
  }
  
  public boolean getHasContractorsEquipEmployeesToolsDeductibleTerm() {
    return hasCovTerm("ContractorsEquipEmployeesToolsDeductible");
  }
  
  public boolean getHasContractorsEquipEmployeesToolsLimitTerm() {
    return hasCovTerm("ContractorsEquipEmployeesToolsLimit");
  }
  
  public boolean getHasContractorsEquipEmployeesToolsMaxIndivItemValTerm() {
    return hasCovTerm("ContractorsEquipEmployeesToolsMaxIndivItemVal");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipEmployeesToolsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipEmployeesTools>() {
      public productmodel.ContractorsEquipEmployeesTools newEmptyInstance() {
        return new productmodel.ContractorsEquipEmployeesTools();
      }
      
      
    });
  }
}