package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipRentedEquipment.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipRentedEquipment extends entity.ContrEquipPartCov {
  protected ContractorsEquipRentedEquipment()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipRentedEquipment(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipRentedEquipment");
  }
  
  public ContractorsEquipRentedEquipment(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipRentedEquipment");
  }
  
  public productmodel.OptionContractorsEquipRentedEquipmentDeductibleType getContractorsEquipRentedEquipmentDeductibleTerm() {
    return (productmodel.OptionContractorsEquipRentedEquipmentDeductibleType)getCovTerm("ContractorsEquipRentedEquipmentDeductible");
  }
  
  public productmodel.DirectContractorsEquipRentedEquipmentLimitType getContractorsEquipRentedEquipmentLimitTerm() {
    return (productmodel.DirectContractorsEquipRentedEquipmentLimitType)getCovTerm("ContractorsEquipRentedEquipmentLimit");
  }
  
  public productmodel.DirectContractorsEquipRentedEquipmentMaxIndivItemValType getContractorsEquipRentedEquipmentMaxIndivItemValTerm() {
    return (productmodel.DirectContractorsEquipRentedEquipmentMaxIndivItemValType)getCovTerm("ContractorsEquipRentedEquipmentMaxIndivItemVal");
  }
  
  public boolean getHasContractorsEquipRentedEquipmentDeductibleTerm() {
    return hasCovTerm("ContractorsEquipRentedEquipmentDeductible");
  }
  
  public boolean getHasContractorsEquipRentedEquipmentLimitTerm() {
    return hasCovTerm("ContractorsEquipRentedEquipmentLimit");
  }
  
  public boolean getHasContractorsEquipRentedEquipmentMaxIndivItemValTerm() {
    return hasCovTerm("ContractorsEquipRentedEquipmentMaxIndivItemVal");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipRentedEquipmentInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipRentedEquipment>() {
      public productmodel.ContractorsEquipRentedEquipment newEmptyInstance() {
        return new productmodel.ContractorsEquipRentedEquipment();
      }
      
      
    });
  }
}