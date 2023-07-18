package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2362Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2362Excl extends entity.BAStateExcl {
  protected BATerror2362Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2362Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2362Excl");
  }
  
  public BATerror2362Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2362Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2362ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2362Excl>() {
      public productmodel.BATerror2362Excl newEmptyInstance() {
        return new productmodel.BATerror2362Excl();
      }
      
      
    });
  }
}