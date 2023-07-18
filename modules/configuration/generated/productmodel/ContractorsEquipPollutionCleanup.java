package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipPollutionCleanup.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipPollutionCleanup extends entity.ContrEquipPartCov {
  protected ContractorsEquipPollutionCleanup()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipPollutionCleanup(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipPollutionCleanup");
  }
  
  public ContractorsEquipPollutionCleanup(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipPollutionCleanup");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipPollutionCleanupInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipPollutionCleanup>() {
      public productmodel.ContractorsEquipPollutionCleanup newEmptyInstance() {
        return new productmodel.ContractorsEquipPollutionCleanup();
      }
      
      
    });
  }
}