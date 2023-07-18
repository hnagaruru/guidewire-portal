package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLUndergroundResourceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLUndergroundResourceCov extends entity.GeneralLiabilityCov {
  protected GLUndergroundResourceCov()  {
    super((java.lang.Void)null);
  }
  
  public GLUndergroundResourceCov(entity.PolicyPeriod branch)  {
    super(branch, "GLUndergroundResourceCov");
  }
  
  public GLUndergroundResourceCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLUndergroundResourceCov");
  }
  
  public productmodel.DirectGLUndergroundResourceLimitType getGLUndergroundResourceLimitTerm() {
    return (productmodel.DirectGLUndergroundResourceLimitType)getCovTerm("GLUndergroundResourceLimit");
  }
  
  public boolean getHasGLUndergroundResourceLimitTerm() {
    return hasCovTerm("GLUndergroundResourceLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.GLUndergroundResourceCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLUndergroundResourceCov>() {
      public productmodel.GLUndergroundResourceCov newEmptyInstance() {
        return new productmodel.GLUndergroundResourceCov();
      }
      
      
    });
  }
}