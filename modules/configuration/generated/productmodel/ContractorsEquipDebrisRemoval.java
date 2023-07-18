package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipDebrisRemoval.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipDebrisRemoval extends entity.ContrEquipPartCov {
  protected ContractorsEquipDebrisRemoval()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipDebrisRemoval(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipDebrisRemoval");
  }
  
  public ContractorsEquipDebrisRemoval(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipDebrisRemoval");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipDebrisRemovalInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipDebrisRemoval>() {
      public productmodel.ContractorsEquipDebrisRemoval newEmptyInstance() {
        return new productmodel.ContractorsEquipDebrisRemoval();
      }
      
      
    });
  }
}