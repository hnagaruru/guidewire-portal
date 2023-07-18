package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipPreservationOfProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ContractorsEquipPreservationOfProperty extends entity.ContrEquipPartCov {
  protected ContractorsEquipPreservationOfProperty()  {
    super((java.lang.Void)null);
  }
  
  public ContractorsEquipPreservationOfProperty(entity.PolicyPeriod branch)  {
    super(branch, "ContractorsEquipPreservationOfProperty");
  }
  
  public ContractorsEquipPreservationOfProperty(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ContractorsEquipPreservationOfProperty");
  }
  
  static {
    com.guidewire._generated.productmodel.ContractorsEquipPreservationOfPropertyInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ContractorsEquipPreservationOfProperty>() {
      public productmodel.ContractorsEquipPreservationOfProperty newEmptyInstance() {
        return new productmodel.ContractorsEquipPreservationOfProperty();
      }
      
      
    });
  }
}