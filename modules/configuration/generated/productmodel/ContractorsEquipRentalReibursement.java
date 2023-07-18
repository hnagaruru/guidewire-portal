package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipRentalReibursement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipRentalReibursement extends entity.ContrEquipPartCov {
  protected ContractorsEquipRentalReibursement()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipRentalReibursement(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipRentalReibursement");
  }
  
  public ContractorsEquipRentalReibursement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipRentalReibursement");
  }
  
  public productmodel.DirectContractorsEquipRentalPolicyLimitType getContractorsEquipRentalPolicyLimitTerm() {
    return (productmodel.DirectContractorsEquipRentalPolicyLimitType)getCovTerm("ContractorsEquipRentalPolicyLimit");
  }
  
  public productmodel.OptionContractorsEquipRentalReibursementDeductibleType getContractorsEquipRentalReibursementDeductibleTerm() {
    return (productmodel.OptionContractorsEquipRentalReibursementDeductibleType)getCovTerm("ContractorsEquipRentalReibursementDeductible");
  }
  
  public productmodel.DirectContractorsEquipRentalReibursementOccurrenceLimitType getContractorsEquipRentalReibursementOccurrenceLimitTerm() {
    return (productmodel.DirectContractorsEquipRentalReibursementOccurrenceLimitType)getCovTerm("ContractorsEquipRentalReibursementOccurrenceLimit");
  }
  
  public boolean getHasContractorsEquipRentalPolicyLimitTerm() {
    return hasCovTerm("ContractorsEquipRentalPolicyLimit");
  }
  
  public boolean getHasContractorsEquipRentalReibursementDeductibleTerm() {
    return hasCovTerm("ContractorsEquipRentalReibursementDeductible");
  }
  
  public boolean getHasContractorsEquipRentalReibursementOccurrenceLimitTerm() {
    return hasCovTerm("ContractorsEquipRentalReibursementOccurrenceLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipRentalReibursementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipRentalReibursement>() {
      public productmodel.ContractorsEquipRentalReibursement newEmptyInstance() {
        return new productmodel.ContractorsEquipRentalReibursement();
      }
      
      
    });
  }
}