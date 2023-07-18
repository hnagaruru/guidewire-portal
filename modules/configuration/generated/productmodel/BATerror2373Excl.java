package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2373Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2373Excl extends entity.BAStateExcl {
  protected BATerror2373Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2373Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2373Excl");
  }
  
  public BATerror2373Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2373Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2373ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2373Excl>() {
      public productmodel.BATerror2373Excl newEmptyInstance() {
        return new productmodel.BATerror2373Excl();
      }
      
      
    });
  }
}