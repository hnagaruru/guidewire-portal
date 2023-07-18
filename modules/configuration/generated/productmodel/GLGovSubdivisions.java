package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLGovSubdivisions.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLGovSubdivisions extends entity.GeneralLiabilityCov {
  protected GLGovSubdivisions()  {
    super((java.lang.Void)null);
  }
  
  public GLGovSubdivisions(entity.PolicyPeriod branch)  {
    super(branch, "GLGovSubdivisions");
  }
  
  public GLGovSubdivisions(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLGovSubdivisions");
  }
  
  static {
    com.guidewire._generated.productmodel.GLGovSubdivisionsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLGovSubdivisions>() {
      public productmodel.GLGovSubdivisions newEmptyInstance() {
        return new productmodel.GLGovSubdivisions();
      }
      
      
    });
  }
}