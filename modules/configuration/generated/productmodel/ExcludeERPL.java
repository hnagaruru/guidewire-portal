package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeERPL.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeERPL extends entity.GeneralLiabilityExcl {
  protected ExcludeERPL()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeERPL(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeERPL");
  }
  
  public ExcludeERPL(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeERPL");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeERPLInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeERPL>() {
      public productmodel.ExcludeERPL newEmptyInstance() {
        return new productmodel.ExcludeERPL();
      }
      
      
    });
  }
}