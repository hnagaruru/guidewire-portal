package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2359Excl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2359Excl extends entity.BAStateExcl {
  protected BATerror2359Excl()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2359Excl(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2359Excl");
  }
  
  public BATerror2359Excl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2359Excl");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2359ExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2359Excl>() {
      public productmodel.BATerror2359Excl newEmptyInstance() {
        return new productmodel.BATerror2359Excl();
      }
      
      
    });
  }
}