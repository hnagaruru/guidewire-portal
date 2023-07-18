package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipSchedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipSchedCov extends entity.ContractorsEquipCov {
  protected ContractorsEquipSchedCov()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipSchedCov(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipSchedCov");
  }
  
  public ContractorsEquipSchedCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipSchedCov");
  }
  
  public productmodel.OptionContractorsEquipSchedCovDeductibleType getContractorsEquipSchedCovDeductibleTerm() {
    return (productmodel.OptionContractorsEquipSchedCovDeductibleType)getCovTerm("ContractorsEquipSchedCovDeductible");
  }
  
  public productmodel.DirectContractorsEquipSchedCovLimitType getContractorsEquipSchedCovLimitTerm() {
    return (productmodel.DirectContractorsEquipSchedCovLimitType)getCovTerm("ContractorsEquipSchedCovLimit");
  }
  
  public productmodel.TypekeyContractorsEquipSchedCovValuationType getContractorsEquipSchedCovValuationTerm() {
    return (productmodel.TypekeyContractorsEquipSchedCovValuationType)getCovTerm("ContractorsEquipSchedCovValuation");
  }
  
  public boolean getHasContractorsEquipSchedCovDeductibleTerm() {
    return hasCovTerm("ContractorsEquipSchedCovDeductible");
  }
  
  public boolean getHasContractorsEquipSchedCovLimitTerm() {
    return hasCovTerm("ContractorsEquipSchedCovLimit");
  }
  
  public boolean getHasContractorsEquipSchedCovValuationTerm() {
    return hasCovTerm("ContractorsEquipSchedCovValuation");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipSchedCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipSchedCov>() {
      public productmodel.ContractorsEquipSchedCov newEmptyInstance() {
        return new productmodel.ContractorsEquipSchedCov();
      }
      
      
    });
  }
}