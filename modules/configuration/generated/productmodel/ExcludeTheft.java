package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ExcludeTheft.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeTheft extends entity.ContrEquipPartExcl {
  protected ExcludeTheft()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeTheft(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeTheft");
  }
  
  public ExcludeTheft(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeTheft");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeTheftInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeTheft>() {
      public productmodel.ExcludeTheft newEmptyInstance() {
        return new productmodel.ExcludeTheft();
      }
      
      
    });
  }
}