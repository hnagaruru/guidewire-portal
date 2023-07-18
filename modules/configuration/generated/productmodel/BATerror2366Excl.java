package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2366Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2366Excl extends entity.BAStateExcl {
  protected BATerror2366Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2366Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2366Excl");
  }
  
  public BATerror2366Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2366Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2366ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2366Excl>() {
      public productmodel.BATerror2366Excl newEmptyInstance() {
        return new productmodel.BATerror2366Excl();
      }
      
      
    });
  }
}