package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/HOPLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPLine extends entity.HOPLine {
  protected HOPLine()  {
    super((java.lang.Void)null);
  }
  
  public HOPLine(entity.PolicyPeriod branch)  {
    super(branch, "HOPLine");
  }
  
  public HOPLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "HOPLine");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPLine>() {
      public productmodel.HOPLine newEmptyInstance() {
        return new productmodel.HOPLine();
      }
      
      
    });
  }
}