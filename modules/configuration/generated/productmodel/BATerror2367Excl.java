package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2367Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2367Excl extends entity.BAStateExcl {
  protected BATerror2367Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2367Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2367Excl");
  }
  
  public BATerror2367Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2367Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2367ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2367Excl>() {
      public productmodel.BATerror2367Excl newEmptyInstance() {
        return new productmodel.BATerror2367Excl();
      }
      
      
    });
  }
}