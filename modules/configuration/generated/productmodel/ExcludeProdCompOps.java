package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProdCompOps.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeProdCompOps extends entity.GeneralLiabilityExcl {
  protected ExcludeProdCompOps()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeProdCompOps(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeProdCompOps");
  }
  
  public ExcludeProdCompOps(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeProdCompOps");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeProdCompOpsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeProdCompOps>() {
      public productmodel.ExcludeProdCompOps newEmptyInstance() {
        return new productmodel.ExcludeProdCompOps();
      }
      
      
    });
  }
}