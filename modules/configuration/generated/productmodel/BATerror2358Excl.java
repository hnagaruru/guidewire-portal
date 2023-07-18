package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2358Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2358Excl extends entity.BAStateExcl {
  protected BATerror2358Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2358Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2358Excl");
  }
  
  public BATerror2358Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2358Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2358ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2358Excl>() {
      public productmodel.BATerror2358Excl newEmptyInstance() {
        return new productmodel.BATerror2358Excl();
      }
      
      
    });
  }
}