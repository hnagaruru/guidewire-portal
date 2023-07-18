package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/GLLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLLine extends entity.GeneralLiabilityLine {
  protected GLLine()  {
    super((java.lang.Void)null);
  }
  
  public GLLine(entity.PolicyPeriod branch)  {
    super(branch, "GLLine");
  }
  
  public GLLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLLine");
  }
  
  static {
    com.guidewire._generated.productmodel.GLLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLLine>() {
      public productmodel.GLLine newEmptyInstance() {
        return new productmodel.GLLine();
      }
      
      
    });
  }
}