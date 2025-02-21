import connection from "~/server/mysql";

// 处理 API 请求
export default defineEventHandler(async (event) => {
  try {
    const [data] = await connection.query("select * from customers limit 5");
    return {
      code: 200,
      message: "success",
      data,
    }; // 返回查询结果
  } catch (error) {
    console.error("MySQL error: ", error);
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Database error" })
    );
  }
});
