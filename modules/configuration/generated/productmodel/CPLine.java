package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/CPLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CPLine extends entity.CommercialPropertyLine {
  protected CPLine()  {
    super((java.lang.Void)null);
  }
  
  public CPLine(entity.PolicyPeriod branch)  {
    super(branch, "CPLine");
  }
  
  public CPLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CPLine");
  }
  
  static {
    com.guidewire._generated.productmodel.CPLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CPLine>() {
      public productmodel.CPLine newEmptyInstance() {
        return new productmodel.CPLine();
      }
      
      
    });
  }
}