package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/ExcludeCustomEquipment.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeCustomEquipment extends entity.PersonalAutoExcl {
  protected ExcludeCustomEquipment()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeCustomEquipment(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeCustomEquipment");
  }
  
  public ExcludeCustomEquipment(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeCustomEquipment");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeCustomEquipmentInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeCustomEquipment>() {
      public productmodel.ExcludeCustomEquipment newEmptyInstance() {
        return new productmodel.ExcludeCustomEquipment();
      }
      
      
    });
  }
}