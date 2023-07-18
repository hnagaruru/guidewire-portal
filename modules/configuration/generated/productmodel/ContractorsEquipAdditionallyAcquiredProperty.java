package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipAdditionallyAcquiredProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipAdditionallyAcquiredProperty extends entity.ContrEquipPartCov {
  protected ContractorsEquipAdditionallyAcquiredProperty()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipAdditionallyAcquiredProperty(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipAdditionallyAcquiredProperty");
  }
  
  public ContractorsEquipAdditionallyAcquiredProperty(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipAdditionallyAcquiredProperty");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipAdditionallyAcquiredPropertyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipAdditionallyAcquiredProperty>() {
      public productmodel.ContractorsEquipAdditionallyAcquiredProperty newEmptyInstance() {
        return new productmodel.ContractorsEquipAdditionallyAcquiredProperty();
      }
      
      
    });
  }
}