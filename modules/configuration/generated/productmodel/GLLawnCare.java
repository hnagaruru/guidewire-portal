package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLLawnCare.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLLawnCare extends entity.GeneralLiabilityCov {
  protected GLLawnCare()  {
    super((java.lang.Void)null);
  }
  
  public GLLawnCare(entity.PolicyPeriod branch)  {
    super(branch, "GLLawnCare");
  }
  
  public GLLawnCare(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLLawnCare");
  }
  
  static {
    com.guidewire._generated.productmodel.GLLawnCareInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLLawnCare>() {
      public productmodel.GLLawnCare newEmptyInstance() {
        return new productmodel.GLLawnCare();
      }
      
      
    });
  }
}