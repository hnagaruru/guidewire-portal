package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ExcludeVandalism.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeVandalism extends entity.ContrEquipPartExcl {
  protected ExcludeVandalism()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeVandalism(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeVandalism");
  }
  
  public ExcludeVandalism(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeVandalism");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeVandalismInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeVandalism>() {
      public productmodel.ExcludeVandalism newEmptyInstance() {
        return new productmodel.ExcludeVandalism();
      }
      
      
    });
  }
}