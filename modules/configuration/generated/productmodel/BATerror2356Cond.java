package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATerror2356Cond.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATerror2356Cond extends entity.BAStateCond {
  protected BATerror2356Cond()  {
    super((java.lang.Void)null);
  }
  
  public BATerror2356Cond(entity.PolicyPeriod branch)  {
    super(branch, "BATerror2356Cond");
  }
  
  public BATerror2356Cond(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATerror2356Cond");
  }
  
  static {
    com.guidewire._generated.productmodel.BATerror2356CondInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATerror2356Cond>() {
      public productmodel.BATerror2356Cond newEmptyInstance() {
        return new productmodel.BATerror2356Cond();
      }
      
      
    });
  }
}