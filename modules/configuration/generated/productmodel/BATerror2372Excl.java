package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2372Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2372Excl extends entity.BAStateExcl {
  protected BATerror2372Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2372Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2372Excl");
  }
  
  public BATerror2372Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2372Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2372ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2372Excl>() {
      public productmodel.BATerror2372Excl newEmptyInstance() {
        return new productmodel.BATerror2372Excl();
      }
      
      
    });
  }
}