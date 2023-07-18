package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/WorkersCompLine.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class WorkersCompLine extends entity.WorkersCompLine {
  protected WorkersCompLine()  {
    super((java.lang.Void)null);
  }
  
  public WorkersCompLine(entity.PolicyPeriod branch)  {
    super(branch, "WorkersCompLine");
  }
  
  public WorkersCompLine(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "WorkersCompLine");
  }
  
  static {
    com.guidewire._generated.productmodel.WorkersCompLineInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.WorkersCompLine>() {
      public productmodel.WorkersCompLine newEmptyInstance() {
        return new productmodel.WorkersCompLine();
      }
      
      
    });
  }
}