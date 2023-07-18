package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2370Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2370Excl extends entity.BAStateExcl {
  protected BATerror2370Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2370Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2370Excl");
  }
  
  public BATerror2370Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2370Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2370ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2370Excl>() {
      public productmodel.BATerror2370Excl newEmptyInstance() {
        return new productmodel.BATerror2370Excl();
      }
      
      
    });
  }
}